// задание 1

let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: 0,
    setCharCount: function() {
        while (this.checkPositiveInteger() !== true) {
            this.charCount = +prompt('количество символов, которые пользователь должен будет набрать?', 'целое положительное число')
        }
        return this.charCount
    },
    checkPositiveInteger: function() {
        return this.charCount > 0 && ~~this.charCount == this.charCount ? true : false
    },
    task: [],
    createTask: function() {
        let rand, randChar;
        for (var i = 0; i < this.charCount; i++) {
            rand = Math.floor(Math.random() * this.chars.length),
                randChar = this.chars[rand],
                this.task.push(randChar)
        }
    },
    startTask: function() {
        this.userInput = prompt(keyTrainer.task, 'наберите эту строку');
        return this.userInput
    },
    userInput: '',
    userErrors: 0,
    compareSymbols: function() {
        let y = 0;
        for (var i = 0; i < this.task.length; i++) {
            if (this.task[i] !== this.userInput[i]) y += 1
        }
        this.userErrors = y;
        return this.userErrors
    },
    userErrorsResult: function() {
        if (this.userErrors == 0) return console.log('Поздравляем!!!')
        else return console.log(`${this.userErrors} ошибок(бки) допущено пользователем`)
    }
}

function run() {
    keyTrainer.setCharCount();
    keyTrainer.checkPositiveInteger();
    keyTrainer.createTask();
    keyTrainer.startTask();
    keyTrainer.compareSymbols();
    keyTrainer.userErrorsResult();
}
run()