import { Container } from './styles';

import { FeatureCard } from '../../../../../components';
import { IFeaturesCardProps } from '../../../../../components/Cards/Features';

import accessAnywhereImg from '../../../../../images/icon-access-anywhere.svg';
import securityImg from '../../../../../images/icon-security.svg';
import collaborationImg from '../../../../../images/icon-collaboration.svg';
import anyFileImg from '../../../../../images/icon-any-file.svg';

export function Features(){
    const data: IFeaturesCardProps[] = [
        {
            title: 'Access your files, anywhere',
            description: 'The abillity to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
            image: accessAnywhereImg,
            altImageText: 'Access Anywhere'
        },
        {
            title: 'Security you can trust',
            description: '2-factor authentication and user-controllerd encryption are just a couple of the security features we allow to help secure your files.',
            image: securityImg,
            altImageText: 'Security'
        },
        {
            title: 'Real-time collaboration',
            description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
            image: collaborationImg,
            altImageText: 'Collaboration'
        },
        {
            title: 'Store any type of file',
            description: 'Whether you are sharing hollidays photos of work documents, Fylo has you covered allowing for all file types to be securely stored and shared',
            image: anyFileImg,
            altImageText: 'Any File'
        },
    ];

    return(
        <Container>
            { data.map((feature: IFeaturesCardProps, index: number) => (
                <FeatureCard
                    key={ index }
                    title={ feature.title }
                    description={ feature.description }
                    image={ feature.image }
                    altImageText={ feature.altImageText }
                    className="featureCard"
                />
            ))}
        </Container>
    )
}