import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SampleTable } from '../../src/components/SampleTable';

describe('SampleTable', () => {
    test('sample', () => {
        const { getByRole } = render(<SampleTable/>)

        // TODO: Like bug https://github.com/testing-library/dom-testing-library/issues/930
        expect(getByRole('columnheader', { name: 'Group1' })).toBeVisible()
    })
})
