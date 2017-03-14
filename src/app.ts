import {generateRandomID, Component} from './utils'

//Type parameter, reicbimos y regresamos el mismo tipo de dato
//Generic and Types parameters
/*function identity<T>(arg: T): T{
    return arg;
}*/

//identity('James');
//identity<string>('James');

//var symbol: ValidSymbol = "$"
//var length: number = 7;
//var str: string = 'Jorge' //String Literal Type

/*Diferencias entre void y never, void es returning no value
mientras que never es never returning */
/*function userAlert(): void{
    alert('Hello');
}*/

/*function userAlert(): never{
    throw new Error('Fail');
    
} */

/*class Component{
    constructor(){
        this.log()
    }
    log(){
        console.log('Component Created')
    }
}*/

interface Component2{
    onInit(el: HTMLElement | null): void
}

/*Modificadores de acceso
-Por default Typscript pone los modificadores de acceso como public.
-Tenemos public, private (solo dentro de la clase), protected (dentro de las clases y los hijos de la clase) y 
readonly
 */

function enumerable(isEnumerable: boolean){
    return (target, propertyKey, propertyDescriptor: PropertyDescriptor) => {
        propertyDescriptor.enumerable = isEnumerable
    }
}

function prop(x, name){
    console.log(x,name);
}

function param(x, name, index){
    console.log(x, name, index);
}

//Podemos implementar classes e interfaces
//class App extends Component implements Component2{
//Decorator
@Component({
    id: 'app'
})
class App{  
    //private readonly foo:string = "bar"
    //static id : string = 'app'
    //id: string 
    //Instance property
    /*constructor(){
        this.id = 'app'
    } */
    @prop 
    static version: string
    @enumerable(false)
    public onInit(@param el: HTMLElement | null): void{
        setInterval(function(){
        //This is called - Control flow
            if(el){
                el.innerHTML = generateRandomID({
                    symbol :'#',
                    length: 7
                })
            }
        },1000);
    }
}

/*LLamar a un método static */
//App.onInit

/*Instance property in JS
function App(){
    this.id = 'app';
} 

Static property
function App(){}
App.id = 'app'
*/

function main(CompnentClass){
    //With Instance
    //const cmp = new CompnentClass()
    //var app = document.getElementById(cmp.id)
    //With static
    const el = document.getElementById(CompnentClass.id)
    const cmp = new CompnentClass()
    cmp.onInit(el)
}

main(App);