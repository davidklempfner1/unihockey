import { auth } from '@/app/auth';
import Image from 'next/image';

const UserInfo = async () => {
    const session = await auth();
    return (
        <>
            <p>Signed in as {session?.user?.name}</p>
            <p>Signed in as {session?.user?.email}</p>
            {session?.user?.image && (
                <Image
                    src={session.user?.image ?? ''}
                    alt={session.user?.name ?? "Avatar"}
                    width={48}
                    height={48}
                    style={{borderRadius: '50%'}}
                />)}
        </>
    )
}

export default UserInfo