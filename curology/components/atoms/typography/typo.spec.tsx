import React from 'react';
import { render} from '@testing-library/react';


import {TextLarge, TextMidi, TextSmall, TextVariant} from '.';


describe('Typography components', () => {
            const props = {variant: TextVariant.BLACK};

        test('should  check and render text large', () => {
                const {getByTestId, getByText} = render(<TextLarge {...props} >Large</TextLarge>)
                expect(getByTestId('cgly-text-large')).toBeInTheDocument();
                expect(getByText('Large')).toBeTruthy();
        })
        test('should  check and render text midi', () => {
            const {getByTestId, getByText} = render(<TextMidi {...props} >Midi</TextMidi>)
               expect(getByTestId('cgly-text-midi')).toBeInTheDocument();
                expect(getByText('Midi')).toBeTruthy();
            
        })

        test('should  check and render text small', () => {
            const {getByTestId, getByText} = render(<TextSmall {...props} >Small</TextSmall>)
            expect(getByTestId('cgly-text-small')).toBeInTheDocument();
                expect(getByText('Small')).toBeTruthy();
            
        })
})

