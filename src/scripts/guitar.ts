// <div class="string">
//     <div class="flat-note">E</div>
//     <div class="flat-root"></div>
//     <div class="flat">
//         <div class="circle"></div>
//         <hr class="line" />
//     </div>
//     <div class="flat">
//         <div class="circle"></div>
//         <hr class="line" />
//     </div>
//     <div class="flat">
//         <div class="circle"></div>
//         <hr class="line" />
//     </div>
// </div>

const createElement = (
    tag: string,
    classNames: string = "",
    innerText: string = "",
    children: Element[] = undefined
) => {
    const element = document.createElement(tag);
    classNames.split(" ").forEach((className) => element.classList.add(className));
    element.innerText = innerText;
    if (children) children.forEach((child) => element.appendChild(child));
    return element;
};

export const createGuitar = () => {
    const guitar = createElement("div", "guitar", "", [
        ...new Array(6).fill(0).map((_, i) => {
            const string = createElement("div", "string", "", [
                createElement("div", "flat-note", "E"),
                createElement("div", "flat-root"),
                ...new Array(3)
                    .fill(0)
                    .map(() =>
                        createElement("div", "flat", "", [createElement("div", "circle"), createElement("hr", "line")])
                    ),
            ]);
            string.id = `string-${i + 1}`;
            return string;
        }),
    ]);

    return guitar;
};
