import Reactl, {useEffect} from 'react'

const Navbar = ({color}) => {

      //run on every render
  useEffect(() => {
    alert("hey refresh the page")
   
     }, [])

    // run when the color was changed and the color was changed when the count was changed.
    useEffect(() => {
    alert("the color was changed");
    }, [color])
    return (
        <div>
          
            halo i am color {color} that change
        </div>
    )
}

export default Navbar
