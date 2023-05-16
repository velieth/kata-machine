type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.next = node;
        this.head = node;
}
    pop(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        return head.value;
}
    peek(): T | undefined {
        return this.head?.value;
}
}