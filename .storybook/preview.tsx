import type {Preview} from '@storybook/react';
import '../src/app/globals.css';
import {inter, serif} from '@/config/fonts';

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className={`m-2 p-4 ${inter.variable} ${serif.variable}`}>
                <Story/>
            </div>
        ),
    ],
};

export default preview;
