'use client'
import {createContext,useContext,type ReactNode} from 'react'
import type {TemplateLocale} from '../../types'
export interface SheltaHostOptions{brandName?:Record<TemplateLocale,string>;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Record<TemplateLocale,string>;marketplaceAriaLabel?:Record<TemplateLocale,string>;filing?:ReactNode}
const Context=createContext<SheltaHostOptions>({})
/** 宿主通过上下文注入品牌；通用模板不依赖具体宿主。 */
export function SheltaHostProvider({children,...options}:SheltaHostOptions&{children:ReactNode}){return <Context.Provider value={options}>{children}</Context.Provider>}
export const useSheltaHost=()=>useContext(Context)
