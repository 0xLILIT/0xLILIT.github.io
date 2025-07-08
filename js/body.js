import { Vector2 } from "./vector2.js";
export class Body {
    constructor(position = new Vector2(), velocity = new Vector2(), mass = 100, elasticity = 0.5) {
        this.position = position;
        this.mass = mass;
        this.velocity = velocity;
        this.elasticity = elasticity;
    }
    get x() {
        return this.position.x;
    }
    set x(val) {
        this.position.x = val;
    }
    set y(val) {
        this.position.y = val;
    }
    get y() {
        return this.position.y;
    }
    get vx() {
        return this.velocity.x;
    }
    get vy() {
        return this.velocity.y;
    }
    set vx(val) {
        this.velocity.x = val;
    }
    set vy(val) {
        this.velocity.y = val;
    }
}
