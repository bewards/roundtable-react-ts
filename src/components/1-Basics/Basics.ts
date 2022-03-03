import type { DirectionOption } from "../../typings/presentation";

/*  Early Benefits
*
* noImplicitReturns - prevents you from forgetting to return at the end of a function
* allowUnreachableCode
* 
* String literal types
*   https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#string-literal-types
*
*/
export function getDirectionOutput(direction: DirectionOption): number {
    // TODO: change direction type to 'DirectionOption'
    if (direction === "horizontal") {
        return 1;
    }
    else if (direction === "vertical") {
        return 2;
    }
    // else {
    //     return "bacon"; // wrong return type detected
    // }

    // direction = "intruder";

    return 4;   // unreachable code detected
}
// getDirectionOutput("intruder!");





/*  
*   implied type: string[]
*   strict null checks: 'object is possibly undefined'
*/
const appleTypes = ["galla", "macintosh", "granny smith", "honeycrisp", "gala"];    // inferred type string[]
const aLargeApple = appleTypes.find((apple) => apple.length > 20);
console.log(aLargeApple?.length);






/*  TYPES
*
* undefined     un-initialized (ex: object property doesn't exist, func return type)
* null          field has no value
* any           i don't care - i am not type checked - you are assuming you know the environment better than TypeScript
* unknown       i don't know (yet)
*
** primitives **
* string
* number
* boolean
*
* Date
* enum
* array<object>
*/
const testObj: any = {};    // TODO: remove type 'any' -> {} has no properties
// testObj.color = "red";

interface FruitOptions {
    // primitives
    color: string;
    volume: number;


    tags?: string[];
    tuple?: [string, number];   // fixed number of elements whose types are known
    expires?: Date;
    notSure: unknown;
    taste: Taste;
    isDelicious: boolean;

    prop: string | null;
}

enum Taste {
    Savory = 1,
    Sweet,
    Salty
}
const onion = {} as FruitOptions;
onion.color = "7";
onion.volume = 8;

onion.notSure = "maybe a string";
onion.notSure = true;

onion.expires?.getDate();    // null and undefined are subtypes of all other types

onion.taste = Taste.Salty;
console.log(Taste[2]);      // 'Sweet'





/*  Default Parameters
*
*   use case: utilities.ts
*   - Like optional parameters, default parameters are also optional
*   - Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters
*       - I recommend keeping default parameters after required parameters, otherwise you must pass the parameter as undefined: (undefined, 2)
*/
const ScreenSize = {
    Mobile: 768,
    Tablet: 1280,
};
export function isMobile(overrideSize: number = ScreenSize.Mobile): boolean {
    return window.matchMedia(`(max-width: ${overrideSize}px)`).matches;
}




/*  Assertion Operators
*
* field?        asserts operand is optional and may be undefined
* field!        asserts operand is non-null and non-undefined (yay, no longer need null checks)
*/
let someObj: { field: string } | null;
const someValue = someObj!.field;           // very useful in react / svelte / angular / vue component props

function validateInput(input?: HTMLInputElement): boolean {
    if (input && input.value.length) {
        return true;
    }
    
    return false;
}
validateInput();






/*  Type Aliases vs Interfaces
* 
* Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
*/
interface Animal {
    name: string;
}
interface Animal {
    legCount: number;
}

// type Reptile {
//     scaleCount: number;
// }
// type Reptile {
//     isColdBlooded: boolean = true;
// }

/*  Unions
*
*  unions with common fields
*/
interface Bird {
    fly(): void;
    makeNoise(): void;
}
interface Fish {
    swim(): void;
    makeNoise(): void;  // fish may make a different noise
}

// declare: trust me compiler, this already exists (instead of creating concrete implementation from a class)
declare function getPet(): Bird | Fish;
const pet = getPet();
pet.makeNoise();
// // pet.swim();