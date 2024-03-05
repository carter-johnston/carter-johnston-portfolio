import type { ComponentType } from 'svelte'
import { default as Frame1 } from './Frame1.svelte'
import { default as Frame2 } from './Frame2.svelte'
import { default as Frame3 } from './Frame3.svelte'
import { default as Frame4 } from './Frame4.svelte'
import { default as Frame5 } from './Frame5.svelte'
import { default as Frame6 } from './Frame6.svelte'
import { default as Frame7 } from './Frame7.svelte'
import { default as Frame8 } from './Frame8.svelte'

export const frames: {durationMs: number, component: ComponentType}[] = [
    {durationMs: 20, component: Frame1 },
    {durationMs: 5, component: Frame2 },
    {durationMs: 5, component: Frame3 },
    {durationMs: 5, component: Frame4 },
    {durationMs: 5, component: Frame5 },
    {durationMs: 5, component: Frame6 },
    {durationMs: 5, component: Frame7 },
    {durationMs: 5, component: Frame8 } 
 ]