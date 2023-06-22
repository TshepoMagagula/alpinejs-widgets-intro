function Counter() {
    return {
        count: 0,
        increment() {
            if(this.count < 50){
                this.count++;
            }
            else{
                alert("You have reached the Maximum Value.");
            }
        },
        reset() {
            this.count = 0;
        },
        decrement() {
            if(this.count > 0){
                this.count--;
            }
        },
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('counter3', Counter);
});