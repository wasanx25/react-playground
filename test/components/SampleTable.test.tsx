import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SampleTable } from '../../src/components/SampleTable';

describe('SampleTable', () => {
    test('sample', () => {
        const { getByRole } = render(<SampleTable/>)

        expect(getByRole('rowheader', { name: 'Group1' })).toBeVisible()
    })
})
