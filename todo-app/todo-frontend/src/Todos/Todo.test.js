import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from "./Todo";

test('render todo', () => {
    const todo = { text: 'TEXTING' }

    render(<Todo todo={todo} />)

    const element = screen.getByText('TEXTING')
    expect(element).toBeDefined()
})