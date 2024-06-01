                        // click     // clickLi    // 123
export function useEvent(eventName, eventFunction, eventParams = []) {
            // clickLi => window['clickLi'] = function ......
    window[eventFunction.name] = eventFunction;

            // onclick="clickLi(123)" 
    return `on${eventName}="${eventFunction.name}(event, ${eventParams})"`;
};

// TaskItem.js

/* let event = useEvent('click', function clickLi() {
    // cortar o texto
    // marcar o input
}, 123); */
