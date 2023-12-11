import { TypeAnimation } from 'react-type-animation';

const Type = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Im Alif and Im a',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'FrontEnd Developer',
                    1000,
                    'React Developer',
                    1000,
                    'Web Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default Type;