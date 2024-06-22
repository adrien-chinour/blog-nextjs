import type {Preview} from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className={`m-2 p-4`}>
                <Story/>
            </div>
        ),
    ],
};

export default preview;
