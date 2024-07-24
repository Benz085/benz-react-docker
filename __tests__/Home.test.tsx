import MyComponent from '@/components/page/aboutus/MyComponent'
import { render, screen } from '@testing-library/react'

describe('MyComponent', () => {
    it('should have Docs text', () => {
        render(<MyComponent />) // ARRANGE 

        const myElem = screen.getByText('My Component Text') // ACT 

        expect(myElem).toBeInTheDocument() // ASSERT
    })
})