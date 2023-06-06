
// https://github.com/luixaviles/event-bus-typescript/tree/master


interface Registry {
    unregister: () => void;
}

interface Callable {
    [key: string]: (...args: any[]) => any;
}

interface Subscriber {
    [key: string]: Callable;
}

interface IGraphicsEventBus {
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: (...args: any[]) => any): Registry;
}


export class GraphicsEventBus implements IGraphicsEventBus {
    private subscribers: Subscriber;
    private static nextId = 0;
    // private static instance?: GraphicsEventBus = undefined;


    /*
    private constructor() {
        this.subscribers = {};
    }

    public static getInstance(): GraphicsEventBus {
        if (this.instance === undefined) {
            this.instance = new GraphicsEventBus();
        }

        return this.instance;
    }
    */



    constructor() {
        this.subscribers = {};
    }



    public dispatch<T>(event: string, arg?: T): void {
        const subscriber = this.subscribers[event];

        if (subscriber === undefined) {
            return;
        }

        Object.keys(subscriber).forEach((key) => subscriber[key](arg));
    }

    public register(event: string, callback: (...args: any[]) => any): Registry {
        const id = this.getNextId();
        if (!this.subscribers[event]) this.subscribers[event] = {};

        this.subscribers[event][id] = callback;

        return {
            unregister: () => {
                delete this.subscribers[event][id];
                if (Object.keys(this.subscribers[event]).length === 0)
                    delete this.subscribers[event];
            },
        };
    }

    public on(event: string, callback: (...args: any[]) => any): Registry {
        return this.register(event, callback);
    }

    private getNextId(): number {
        return GraphicsEventBus.nextId++;
    }
}

/*

import { EventBus } from './event-bus/event-bus';

const registry = EventBus.getInstance().register('hello-world', (name: string) => {
    if(name)
        console.log('Hello ' + name);
    else 
        console.log('Hello world');
});


EventBus.getInstance().dispatch<string>('hello-world', 'Luis');
EventBus.getInstance().dispatch<string>('hello-world');

registry.unregister();
EventBus.getInstance().dispatch<string>('hello-world');

*/