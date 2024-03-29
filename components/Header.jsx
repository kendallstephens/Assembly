import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import {Grid, Segment, Button, Icon} from 'semantic-ui-react'
export default function Header() {

  const [session] = useSession();

    const handleSignin = (e) => {
      e.preventDefault()
      signIn()
  }
    const handleSignout = (e) => {
      e.preventDefault()
      signOut()
    }
  return (
    <div className='header'>
      <Grid > 
        <Grid.Column > 
          <Button animated>
            {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
            {!session && <a href="#" onClick={handleSignin}  className="btn-signin"> <Button.Content visible>Sign In</Button.Content></a>  } 
           </Button>
         </Grid.Column>
      </Grid> 
    </div>
  )
}