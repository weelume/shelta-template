import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {CTA,FAQ,Services,Work} from '../components/Sections'
export default function Page(props:SiteTemplatePageProps){return <Shell {...props}><div className="sh-page-top"><Services {...props}/></div><Work {...props}/><FAQ {...props}/><CTA {...props}/></Shell>}
