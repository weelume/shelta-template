import type {CSSProperties} from 'react'
/** 双层字形使用逐字延迟，在悬停和键盘聚焦时向上翻动。 */
export function HoverText({text}:{text:string}){return <span className="sh-hover-text" aria-label={text}><span aria-hidden="true">{Array.from(text).map((letter,i)=><span key={i} className="sh-letter-window"><span data-letter={letter===' '?'\u00a0':letter} style={{'--sh-letter-delay':`${i*.018}s`} as CSSProperties}>{letter===' '?'\u00a0':letter}</span></span>)}</span></span>}
