import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Agents,CTA} from '../components/Sections'
export default function Page(props:SiteTemplatePageProps){return <Shell {...props}><div className="sh-page-top"><Agents {...props}/></div><CTA {...props}/></Shell>}
