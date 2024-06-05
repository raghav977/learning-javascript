const course={
    name:"Javascript",
    price:1000,
    trainer:"Raghav",
    rating:5
}
console.log(course.trainer)

// const {trainer} = course
// console.log(trainer)

const {trainer:teacher} = course

console.log(teacher)