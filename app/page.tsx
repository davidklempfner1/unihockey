import { auth } from '@/app/auth';
import { SignInButton } from '@/app/components/SignInButton';
import Link from 'next/link';
import { SignOutButton } from './components/SignOutButton';

export default async function Home() {
    const session = await auth();
    // console.log(session);

    if (session) {
        return (
            <div>
                <div><Link href='/user-info'>User Info</Link></div>
                <SignOutButton />
            </div>
        );
    }
    else {  
        return (
            <div>
                <p>You are not signed in</p>
                <SignInButton />
            </div>
        );
    }
}