// S — Single responsibility principle
// O — Open closed principle
// L — Liskov substitution principle
// I — Interface segregation principle
// D — Dependency Inversion principle



const circle = (radius) => {
    const proto = {
        type: 'Circle',
        area() {
            return Math.PI * Math.pow(radius, 2);
        }
    }

    return Object.assign(Object.create(proto), {radius});
}

const square = (length) => {
    const proto = {
        length,
        type: 'Square',
        area: (args) => Math.pow(args.length, 2)
    }
    const basics = shapeInterface(proto);
    const composite = Object.assign({}, basics);
    return Object.assign(Object.create(composite), {length});
};

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = [];
            for(shape of this.shapes) {
                // if(shape.type === 'Square') {
                //     area.push(Math.pow(shape.length, 2))
                // } else if(shape.type === 'Circle') {
                //     area.push(Math.PI * Math.pow(shape.length, 2));
                // }
                if(Object.getPrototypeOf(shape).type ='shapeInterface') {
                    area.push(shape.area());
                } else {
                    throw new Error('this is not a shapeInterface object');
                }
            }
            return area.reduce((v, c) => c += v, 0);
        },
        ouput() {
            return `
            <h1>
            Sum of the areas of provided shapes;
            ${this.sum()}</h1>
            `
        }
    }
    return Object.assign(Object.create(proto), {shapes: s});
}


const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})



const shapes = [
    circle(2),
    square(5),
    square(6)
]

const areas = areaCalculator(shapes);


const s= square(5);
console.log('OBJ\n', s);
console.log('PROTO\n', Object.getPrototypeOf(s));
s.area();
