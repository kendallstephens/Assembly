import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import {Grid, Segment, Button} from 'semantic-ui-react'
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
      <Grid textAlign='center' verticalAlign='right'>
        {/* <Link href='/'>
        <a className='logo'></a>
        </Link> */}
        <Grid.Column >
          <Button>
            {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
            {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  } 
           </Button>
        </Grid.Column>
      </Grid>
    </div>
  )
}