import { writable } from 'svelte/store';

export interface TodoType {
	id: number;
	text: string;
	completed: boolean;
}

export const todoData = writable<TodoType[]>([]);
