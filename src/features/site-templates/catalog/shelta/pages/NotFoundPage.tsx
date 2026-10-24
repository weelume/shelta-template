import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
export default function Page(props:SiteTemplatePageProps){return <Shell {...props}><section className="sh-container sh-error sh-page-top"><strong>404</strong><h1>{props.locale==='en'?'Something Went Wrong!':'这个页面暂时不在这里'}</h1><p>{props.locale==='en'?"The page you’re looking for isn’t quite ready yet — we’re still putting the finishing touches on it.":'你寻找的页面暂时无法访问 可以先回到首页继续探索'}</p><Link className="sh-button sh-dark-button" href={props.basePath||'/'}>{props.locale==='en'?'Back to Home':'返回首页'}</Link></section></Shell>}
