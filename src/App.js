
function App(props) {

    {/*1 ЗАДАНИЕ*/}
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    const positive = array.filter(item => {
        return item > 0
    })
    console.log(positive)


    {/*2 ЗАДАНИЕ*/}
    const messages = [
        {message: 'hello', error: true},
        {message: 'javascript', error: false},
        {message: 'intocode', error: true},
        {message: 'react', error: true},
        {message: 'angular', error: false},
        {message: 'es6', error: false},
    ];
    const messageTrue = messages.filter(item => {
        return item.error === true
    })
    console.log(messageTrue)



    {/*3 ЗАДАНИЕ*/}
    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];

     const wordsFilter = words.filter(item => {
         return item.length < 5
     })
    const wordsMap = wordsFilter.map(item => {
        return item = '*'
    })
    console.log(wordsMap)
    return (
        <div>1</div>
    );




    {/*4 ЗАДАНИЕ*/}
    const sendMessage = message => {
        /*
        * тут какой-то большой код для отправки сообщения
        */
    }
    const half = number => {
        return number / 2;
    }
    const showConsole = () => console.log('intocode');
    const concatWords = ((first, second) => first + second)
}




    {/*5 ЗАДАНИЕ*/}
function justText() {
    return 'intocode';
}

const logging = text => console.log(text);

function add(x,y) {
    const z = 3;
    return z * x * y;
}

function onlyPositive(number) {
    if(number < 0) {
        return false;
    }
    return true;
}
export default App;