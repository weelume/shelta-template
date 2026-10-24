import {media} from '../content'
const logos=['8WTO2gZg4E7Xb7L5QhYtyY6CALI.png','bDLeQGo35LP4DvzVMitgB9EvSwg.png','C5XzBCISLhQyH5W0JBnrbG63WOE.png','Ox0YgIyQ9loVYa2OimEBXx8LN3w.png']
export function Partners(){return <div className="sh-partners" aria-hidden="true"><div>{[...logos,...logos].map((name,i)=><img key={i} src={media(name)} alt="" loading="lazy"/>)}</div></div>}
