import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RestaurentInfoShimmer = () => {
    return (
        <div className="m-3 text-center">
            <h3><Skeleton width={250}/></h3>
            <h3><Skeleton width={250}/></h3>
            <Skeleton height={300} width={300}/>
            <h4><Skeleton width={250}/></h4>
            <h4><Skeleton width={250}/></h4>
        </div>
    )
}

export default RestaurentInfoShimmer;