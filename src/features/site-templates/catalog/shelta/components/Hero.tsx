'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {brand} from '../config/brand'
import {media} from '../content'
import {useSheltaHost} from '../host'
import {Parallax,Reveal} from './Motion'
import {HoverText} from './HoverText'
export function Hero({locale='zh',basePath}:SiteTemplatePageProps){const host=useSheltaHost(),name=host.brandName?.[locale]??brand.name[locale];return <section className="sh-hero" id="hero"><Parallax><picture><source media="(max-width:809px)" srcSet={media('LcFEOFoYvotDH9FmbixuIKY58.png')}/><img className="sh-hero-image" src={media('VNCvvZHX9fSoEpABpFD65uPKUw.png')} alt={locale==='zh'?'静谧湖面上的现代住宅':'Modern house above a quiet lake'}/></picture></Parallax><div className="sh-hero-content"><Reveal delay={.2}><div className="sh-hero-word" style={{fontSize:'clamp(42px, calc((100vw - 60px) * '+(locale==='zh'?1:1.55)+' / '+Array.from(name).length+'), 350px)'}}>{name}</div></Reveal><div className="sh-hero-bottom"><Reveal delay={.4}><h1>{locale==='zh'?<>找到理想的家<br/>开启新的生活</>:<>Find Your Perfect<br/>Home Today.</>}</h1><Link className="sh-button" href={basePath+'/project'}><HoverText text={locale==='zh'?'探索精选房源':'Explore Properties'}/></Link></Reveal><Reveal delay={.6} className="sh-founder"><img src={media('npKCKNDcTtrlXF1CYMWxAlMeM.png')} alt="Lara Jeans"/><p>Lara Jeans<br/>{locale==='zh'?'创始人 · 房产顾问':'Founder · Real Estate Advisor'}</p></Reveal></div></div></section>}
