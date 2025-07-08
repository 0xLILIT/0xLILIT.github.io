export class Vector2 {
    static fromArray(arr) {
        if (arr.length < 2)
            throw new Error("Could not parse array.\nReason: Missing element.");
        const x = typeof arr[0] !== "number" ? Number(arr[0]) : arr[0];
        const y = typeof arr[1] !== "number" ? Number(arr[1]) : arr[1];
        return new this(x, y);
    }
    static fromObject(obj) {
        if (obj.x === undefined || obj.y === undefined)
            throw new Error("Could not parse object.\nReason: Missing key.");
        const x = typeof obj.x !== "number" ? Number(obj.x) : obj.x;
        const y = typeof obj.y !== "number" ? Number(obj.y) : obj.y;
        if (Number.isNaN(x) || Number.isNaN(y))
            throw new Error("Could not parse.\nReason: Value is NaN.");
        return new this(x, y);
    }
    static fromVector2(vec) {
        return new this(vec.x, vec.y);
    }
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    get magnitudeSquared() {
        return this.x ** 2 + this.y ** 2;
    }
    clone() {
        return Vector2.fromVector2(this);
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    toAdded(vec) {
        return this.clone().add(vec);
    }
    distanceTo(vec) {
        const dx = this.x - vec.x;
        const dy = this.y - vec.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
    distanceToSquared(vec) {
        const dx = this.x - vec.x;
        const dy = this.y - vec.y;
        return dx ** 2 + dy ** 2;
    }
    normalize() {
        const magnitude = this.magnitude;
        if (magnitude === 0)
            return this;
        this.x /= magnitude;
        this.y /= magnitude;
        return this;
    }
    toNormalized() {
        return this.clone().normalize();
    }
    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }
    toSubtracted(vec) {
        return this.clone().subtract(vec);
    }
    copy(vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }
    copyX(vec) {
        this.x = vec.x;
        return this;
    }
    copyY(vec) {
        this.y = vec.y;
        return this;
    }
    invert() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    toInverted() {
        return this.clone().invert();
    }
    invertX() {
        this.x *= -1;
        return this;
    }
    invertY() {
        this.y *= -1;
        return this;
    }
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
}
