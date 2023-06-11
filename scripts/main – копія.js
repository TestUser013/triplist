"use strict";

class Trip {

    rows = [];

    animatedCells = [];

    constructor() {
        this.setupItems();
        this.setupReferences();
        this.setupRows();
        this.setupEventListeners();
        this.sortRows();
    }

    setupReferences() {
        this.table = document.getElementById("table");
        this.thead = table.getElementsByTagName("thead").item(0);
        this.tbody = table.getElementsByTagName("tbody").item(0);
        this.spanList = [...this.thead.getElementsByTagName("span")];
        this.circleBarTemplate = document.getElementById("circle-bar");
    }

    setupItems() {
        const localStorageList = JSON.parse(localStorage.getItem("list")) || [];
        if (localStorageList.length) {
            document.getElementById("status").innerText = "Завантажено з сесії";
        }
        list.forEach((item) => {
            const localStorageItem = localStorageList.find((localItem) => localItem.item === item.item);
            if (localStorageItem) {
                item.checked = localStorageItem.checked;
                item.status = localStorageItem.status;
            } else {
                item.checked = false;
                item.status = false;
            }
        });
    }

    resetItems() {
        localStorage.removeItem("list");
        document.location.reload();
    }

    setupEventListeners() {
        this.tbody.addEventListener("change", (event) => {
            if (event.target.classList.contains("status")) {
                this.onStatusChange(event.target);
            } else {
                this.onCheckChange(event.target);
            }
        });

        this.thead.addEventListener("click", (event) => {
            const th = event.target.closest("th");
            this.onSortingChange(th);
        });

        document.querySelector("#reset").addEventListener("click", () => this.resetItems());
    }

    setupRows() {
        const template = document.getElementById("row-template");
        list.forEach((item) => {
            const tr = document.importNode(template.content.querySelector("tr"), true);
            const td = tr.querySelectorAll("td");
            const firstInput = td[2].querySelector("input");
            const secondInput = td[3].querySelector("input");
            td[0].textContent = item.item;
            td[1].textContent = item.group;

            if (item.checked) {
                firstInput.checked = item.checked;
                tr.classList.add("item-unused");
            }
            if (item.status) {
                secondInput.checked = item.status;
                tr.classList.add("item-selected");
            }
            this.rows.push({ tr, item });
            this.tbody.append(tr);
        });
    }

    onStatusChange(checkbox) {
        const tr = checkbox.closest("tr");
        const td = checkbox.closest("td");
        tr.classList.toggle("item-unused", checkbox.checked);
        this.runCircleBar(td, 4);
        this.updateLocalStorage(tr, "checked", checkbox.checked);
    }

    onCheckChange(checkbox) {
        const tr = checkbox.closest("tr");
        const td = checkbox.closest("td");
        tr.classList.toggle("item-selected", checkbox.checked);
        this.runCircleBar(td, 2);
        this.updateLocalStorage(tr, "status", checkbox.checked);
    }

    updateLocalStorage(tr, prop, value) {
        const td = tr.querySelector("td");
        const item = list.find((listItem) => listItem.item === td.innerText);
        item[prop] = value;
        localStorage.setItem("list", JSON.stringify(list));
    }

    runCircleBar(element, time = 1) {
        const index = this.animatedCells.findIndex((cell) => cell.element === element);
        if (index !== -1) {
            this.animatedCells[index].circleBar.remove();
            this.animatedCells.splice(index, 1);
        }

        const animatedCell = {
            uid: `uid${(+new Date).toString(16)}`,
            element: element,
            circleBar: this.circleBarTemplate.content.querySelector("div").cloneNode(true),
            animationIterator: 0,
        };

        this.animatedCells.push(animatedCell);
        animatedCell.circleBar.style.setProperty("--time", `${time}s`);
        animatedCell.circleBar.addEventListener("animationend", () => this.onCircleBarAnimationEnds(animatedCell), true);
        element.append(animatedCell.circleBar);
    }

    onCircleBarAnimationEnds(cell) {
        cell.animationIterator++;
        if (cell.animationIterator >= 3) {
            const index = this.animatedCells.findIndex((cell) => cell.uid === cell.uid);
            cell.circleBar.remove();
            this.animatedCells.splice(index, 1);
            if (this.animatedCells.length === 0) {
                this.sortRows();
            }
        }
    }

    onSortingChange(th) {
        const span = th.getElementsByTagName("span").item(0);
        this.setSortIcon(span);
        this.setSortNumber(span);
        this.sortRows();
    }

    setSortIcon(span) {
        const ordered = ["up", "down", "none"];
        const currentClass = span.classList[0];
        span.classList.remove(currentClass);
        span.classList.add(ordered[(ordered.indexOf(currentClass) + 1) % 3])
    }

    setSortNumber(span) {
        if (span.classList.contains("none")) {
            span.innerHTML = "&nbsp;";
            this.getSortedTh()
                .sort((a, b) => a.innerHTML - b.innerHTML)
                .forEach((sortedSpan, index) => {
                    sortedSpan.innerHTML = ++index;
                });
            return;
        }
        if (span.innerHTML !== "&nbsp;") {
            return;
        }
        span.innerHTML = this.getSortedTh().length + 1;
    }

    getSortedTh() {
        return this.spanList.filter((span) => span.innerHTML !== "&nbsp;");
    }

    sortRows() {
        this.animatedCells.forEach((cell) => {
            cell.circleBar.remove();
        });
        this.getSortedTh()
            .sort((a, b) => b.innerHTML - a.innerHTML)
            .map((span) => {
                const th = span.closest("th");
                const index = [...this.thead.firstElementChild.children].indexOf(th);
                const sign = span.classList.contains("down") ? -1 : 1;
                return { index, sign };
            })
            .forEach(({ index, sign }) => {
                this.rows = this.rows.sort((a, b) => sign * this.compare(index, a.tr.children[index], b.tr.children[index]));
            });

        this.rows.forEach(({ tr }) => {
            this.tbody.append(tr);
        });
    }

    compare(index, a, b) {
        if (index < 2) {
            return a.innerHTML.localeCompare(b.innerHTML);
        }
        return Number(a.getElementsByTagName("input")[0].checked) - Number(b.getElementsByTagName("input")[0].checked);
    }

}

window.addEventListener("load", () => new Trip());
