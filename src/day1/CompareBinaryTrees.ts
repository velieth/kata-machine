export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    //base case 1
    if (a === null && b === null) {
        return true;
    }

    //base case 2
    if(a === null || b === null) {
        return false;
    }

    //base case 3
    if(a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}