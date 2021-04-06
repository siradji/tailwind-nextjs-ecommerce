import React from 'react';
import { render, fireEvent} from '@testing-library/react';


// buttons
import {OutlinedButton, Button, ButtonVariant} from '.'


describe('<Button /> testing buttons' , () => {
    const onClick = jest.fn();

    test('should  render button components and test onClick function passed', () => {
            const  { getByTestId} = render(<Button onClick={onClick} variant={ButtonVariant.PURPLE} >Click Me</Button>)

            const elem = getByTestId('cgly-button');
            
            fireEvent.click(elem);

            expect(elem).toBeTruthy();
            expect(onClick).toBeCalledTimes(1)
    })
    
})
