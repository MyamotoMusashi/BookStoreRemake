import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import AddBookPage from "./AddBookPage";
import HomePage from '../../HomePage'
import { ToastContextProvider } from '../../../contexts/ToastContextProvider'

const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({

    // 3- Import non-mocked library and use other functionalities and hooks
    ...(jest.requireActual("react-router-dom")),

    // 4- Mock the required hook
    useNavigate: () => mockedUsedNavigate
}));

const server = setupServer(
    rest.get('http://localhost:8080/authors', (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "George R.R Martin",
                "description": null,
                "pictureUrl": null,
                "bookList": [
                    {
                        "id": 1,
                        "title": "Harry Potter and the Sorcers Stone",
                        "authors": ["com.example.demo.model.entity.Author@79f4d14d"],
                        "price": 10.96,
                        "summary": "Harry Potter is an ordinary boy who lives in a cupboard",
                        "coverUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
                    }
                ]
            },
            {
                "id": 2,
                "name": "George P.P Martin",
                "description": null,
                "pictureUrl": null,
                "bookList": []
            }
        ]))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => {
    server.close
    jest.clearAllMocks
})

test('renders', async () => {
    render(<BrowserRouter>
        <AddBookPage />
    </BrowserRouter>)

    await waitFor(() => {
        let form = screen.getByTestId("add-book-form")
        expect(form).toHaveAttribute("novalidate")
        expect(form.nodeName.toLowerCase()).toBe("form")
        expect(form.childNodes.length).toBe(7)

        let element = screen.getByTestId("form-title")
        expect(element).toHaveClass("mb-3")
        expect(element.nodeName.toLowerCase()).toBe("div")
        expect(element.childNodes.length).toBe(3)

        let formTitleLabel = screen.getByTestId("form-title-label")
        expect(formTitleLabel).toHaveAttribute("for", "title")
        expect(formTitleLabel).toHaveClass("form-label")
        expect(formTitleLabel).toHaveTextContent("Title")
        expect(formTitleLabel.nodeName.toLowerCase()).toBe("label")

        let formTitleInput = screen.getByTestId("form-title-input")
        expect(formTitleInput).toHaveAttribute("placeholder", "Enter title")
        expect(formTitleInput).toHaveAttribute("name", "title")
        expect(formTitleInput).toHaveAttribute("type", "text")
        expect(formTitleInput).toHaveAttribute("id", "title")
        expect(formTitleInput).toHaveClass("form-control")
        expect(formTitleInput.nodeName.toLowerCase()).toBe("input")

        let formTitleFeedback = screen.getByTestId("form-title-feedback")
        expect(formTitleFeedback).toHaveClass("invalid-feedback")
        expect(formTitleFeedback).toHaveTextContent("Please enter title.")
        expect(formTitleFeedback).not.toHaveAttribute("data-validated")
        expect(formTitleFeedback.nodeName.toLowerCase()).toBe("div")

        let formSummary = screen.getByTestId("form-summary")
        expect(formSummary).toHaveClass("mb-3")
        expect(formSummary.nodeName.toLowerCase()).toBe("div")
        expect(formSummary.childNodes.length).toBe(3)

        let formSummaryLabel = screen.getByTestId("form-summary-label")
        expect(formSummaryLabel).toHaveAttribute("for", "summary")
        expect(formSummaryLabel).toHaveClass("form-label")
        expect(formSummaryLabel).toHaveTextContent("Summary")
        expect(formSummaryLabel.nodeName.toLowerCase()).toBe("label")

        let formSummaryTextArea = screen.getByTestId("form-summary-textarea")
        expect(formSummaryTextArea).toHaveAttribute("placeholder", "Enter summary")
        expect(formSummaryTextArea).toHaveAttribute("name", "summary")
        expect(formSummaryTextArea).toHaveAttribute("rows", "10")
        expect(formSummaryTextArea).toHaveAttribute("id", "summary")
        expect(formSummaryTextArea).toHaveClass("form-control")
        expect(formSummaryTextArea.nodeName.toLowerCase()).toBe("textarea")

        let formSummaryFeedback = screen.getByTestId("form-summary-feedback")
        expect(formSummaryFeedback).toHaveClass("invalid-feedback")
        expect(formSummaryFeedback).toHaveTextContent("Please enter summary.")
        expect(formSummaryFeedback).not.toHaveAttribute("data-validated")
        expect(formSummaryFeedback.nodeName.toLowerCase()).toBe("div")

        let formPrice = screen.getByTestId("form-price")
        expect(formPrice).toHaveClass("mb-3")
        expect(formPrice.nodeName.toLowerCase()).toBe("div")
        expect(formPrice.childNodes.length).toBe(3)

        let formPriceLabel = screen.getByTestId("form-price-label")
        expect(formPriceLabel).toHaveAttribute("for", "price")
        expect(formPriceLabel).toHaveClass("form-label")
        expect(formPriceLabel).toHaveTextContent("Price")
        expect(formPriceLabel.nodeName.toLowerCase()).toBe("label")

        let formPriceInput = screen.getByTestId("form-price-input")
        expect(formPriceInput).toHaveAttribute("placeholder", "Enter price")
        expect(formPriceInput).toHaveAttribute("name", "price")
        expect(formPriceInput).toHaveAttribute("type", "number")
        expect(formPriceInput).toHaveAttribute("id", "price")
        expect(formPriceInput).toHaveClass("form-control")
        expect(formPriceInput.nodeName.toLowerCase()).toBe("input")

        let formPriceFeedback = screen.getByTestId("form-price-feedback")
        expect(formPriceFeedback).toHaveClass("invalid-feedback")
        expect(formPriceFeedback).toHaveTextContent("Please enter price.")
        expect(formPriceFeedback).not.toHaveAttribute("data-validated")
        expect(formPriceFeedback.nodeName.toLowerCase()).toBe("div")

        let formCoverUrl = screen.getByTestId("form-cover-url")
        expect(formCoverUrl).toHaveClass("mb-3")
        expect(formCoverUrl.nodeName.toLowerCase()).toBe("div")
        expect(formCoverUrl.childNodes.length).toBe(3)

        let formCoverUrlLabel = screen.getByTestId("form-cover-url-label")
        expect(formCoverUrlLabel).toHaveAttribute("for", "coverUrl")
        expect(formCoverUrlLabel).toHaveClass("form-label")
        expect(formCoverUrlLabel).toHaveTextContent("CoverUrl")
        expect(formCoverUrlLabel.nodeName.toLowerCase()).toBe("label")

        let formCoverUrlInput = screen.getByTestId("form-cover-url-input")
        expect(formCoverUrlInput).toHaveAttribute("placeholder", "Enter url to cover picture")
        expect(formCoverUrlInput).toHaveAttribute("name", "coverUrl")
        expect(formCoverUrlInput).toHaveAttribute("type", "url")
        expect(formCoverUrlInput).toHaveAttribute("id", "coverUrl")
        expect(formCoverUrlInput).toHaveClass("form-control")
        expect(formCoverUrlInput.nodeName.toLowerCase()).toBe("input")

        let formCoverUrlFeedback = screen.getByTestId("form-cover-url-feedback")
        expect(formCoverUrlFeedback).toHaveClass("invalid-feedback")
        expect(formCoverUrlFeedback).toHaveTextContent("Please enter url to cover picture.")
        expect(formCoverUrlFeedback).not.toHaveAttribute("data-validated")
        expect(formCoverUrlFeedback.nodeName.toLowerCase()).toBe("div")

        let formAuthors = screen.getByTestId("form-authors")
        expect(formAuthors).toHaveClass("mb-3")
        expect(formAuthors.nodeName.toLowerCase()).toBe("div")
        expect(formAuthors.childNodes.length).toBe(3)

        let formAuthorsLabel = screen.getByTestId("form-authors-label")
        expect(formAuthorsLabel).toHaveAttribute("for", "authors")
        expect(formAuthorsLabel).toHaveClass("form-label")
        expect(formAuthorsLabel).toHaveTextContent("Authors")
        expect(formAuthorsLabel.nodeName.toLowerCase()).toBe("label")

        let formAuthorsInputGroup = screen.getByTestId("form-authors-input-group")
        expect(formAuthorsInputGroup).toHaveClass("input-group")
        expect(formAuthorsInputGroup.nodeName.toLowerCase()).toBe("div")
        expect(formAuthorsInputGroup.childNodes.length).toBe(3)

        let formAuthorsInputGroupSelect = screen.getByTestId("form-authors-input-group-select")
        expect(formAuthorsInputGroupSelect).toHaveClass("form-select")
        expect(formAuthorsInputGroupSelect).toHaveAttribute("id", "authors")
        expect(formAuthorsInputGroupSelect.childElementCount).toBe(3)
        expect(formAuthorsInputGroupSelect.nodeName.toLowerCase()).toBe("select")
        expect(formAuthorsInputGroupSelect.firstChild).toHaveTextContent("Open this select menu")
        expect(formAuthorsInputGroupSelect.firstChild.nodeName.toLowerCase()).toBe("option")
        expect(formAuthorsInputGroupSelect.lastChild).toHaveTextContent("George P.P Martin")
        expect(formAuthorsInputGroupSelect.lastChild).toHaveAttribute("value", "George P.P Martin")
        expect(formAuthorsInputGroupSelect.lastChild.nodeName.toLowerCase()).toBe("option")

        let formAuthorsInputGroupButton = screen.getByTestId("form-authors-input-group-button")
        expect(formAuthorsInputGroupButton).toHaveAttribute("type", "button")
        expect(formAuthorsInputGroupButton).toHaveAttribute("id", "add-author-button")
        expect(formAuthorsInputGroupButton).toHaveClass("btn btn-primary")
        expect(formAuthorsInputGroupButton).toHaveTextContent("Add")
        expect(formAuthorsInputGroupButton.nodeName.toLowerCase()).toBe("button")

        let formQuantity = screen.getByTestId("form-quantity")
        expect(formQuantity).toHaveClass("mb-3")
        expect(formQuantity.nodeName.toLowerCase()).toBe("div")
        expect(formQuantity.childNodes.length).toBe(3)

        let formQuantityLabel = screen.getByTestId("form-quantity-label")
        expect(formQuantityLabel).toHaveAttribute("for", "quantity")
        expect(formQuantityLabel).toHaveClass("form-label")
        expect(formQuantityLabel).toHaveTextContent("Quantity")
        expect(formQuantityLabel.nodeName.toLowerCase()).toBe("label")

        let formQuantityInput = screen.getByTestId("form-quantity-input")
        expect(formQuantityInput).toHaveAttribute("placeholder", "Enter quantity")
        expect(formQuantityInput).toHaveAttribute("name", "quantity")
        expect(formQuantityInput).toHaveAttribute("type", "number")
        expect(formQuantityInput).toHaveAttribute("id", "quantity")
        expect(formQuantityInput).toHaveClass("form-control")
        expect(formQuantityInput.nodeName.toLowerCase()).toBe("input")

        let formQuantityFeedback = screen.getByTestId("form-quantity-feedback")
        expect(formQuantityFeedback).toHaveClass("invalid-feedback")
        expect(formQuantityFeedback).toHaveTextContent("Please enter quantity.")
        expect(formQuantityFeedback).not.toHaveAttribute("data-validated")
        expect(formQuantityFeedback.nodeName.toLowerCase()).toBe("div")
    })
})

test('selecting an option and clicking the add-author-button should add the option as item in the form-authors-list', async () => {
    render(<BrowserRouter>
        <AddBookPage />
    </BrowserRouter>
    )

    await waitFor(() => {
        let formAuthorsList = screen.getByTestId("form-authors-list")
        expect(formAuthorsList.childElementCount).toBe(0)
        userEvent.selectOptions(screen.getByTestId("form-authors-input-group-select"), "George P.P Martin")
        userEvent.click(screen.getByTestId("form-authors-input-group-button"))
        expect(formAuthorsList.childElementCount).toBe(1)
        expect(formAuthorsList.firstChild).toHaveTextContent("George P.P Martin")
    })
})

test('selecting an option and clicking the add-author-button should not add the option as item in the form-authors-list if the option is already present', async () => {
    render(<BrowserRouter>
        <AddBookPage />
    </BrowserRouter>
    )

    await waitFor(() => {
        let formAuthorsList = screen.getByTestId("form-authors-list")
        expect(formAuthorsList.childElementCount).toBe(0)
        userEvent.selectOptions(screen.getByTestId("form-authors-input-group-select"), "George P.P Martin")
        userEvent.click(screen.getByTestId("form-authors-input-group-button"))
        userEvent.selectOptions(screen.getByTestId("form-authors-input-group-select"), "George P.P Martin")
        userEvent.click(screen.getByTestId("form-authors-input-group-button"))
        expect(formAuthorsList.childElementCount).toBe(1)
    })
})

test('selecting an option and clicking the add-author-button should not add the option as item in the form-authors-list if the option is "Open this select menu"', async () => {
    render(<BrowserRouter>
        <AddBookPage />
    </BrowserRouter>)

    await waitFor(() => {
        let formAuthorsList = screen.getByTestId("form-authors-list")
        expect(formAuthorsList.childElementCount).toBe(0)
        userEvent.selectOptions(screen.getByTestId("form-authors-input-group-select"), "Open this select menu")
        userEvent.click(screen.getByTestId("form-authors-input-group-button"))
        expect(formAuthorsList.childElementCount).toBe(0)
    })
})

test('clicking the add-book-button should redirect to "/" on success response from the server', async () => {
    render(<ToastContextProvider>
        <MemoryRouter initialEntries={['/admin/books/add']}>
            <Routes>
                <Route path="/admin/books/add" element={<AddBookPage />}></Route>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </MemoryRouter>
    </ToastContextProvider>)

    server.use(
        rest.post("http://localhost:8080/books", (req, res, ctx) => {
            return res(
                // Respond with a 200 status code
                ctx.status(200),
                ctx.json({
                    "id": 1,
                    "title": "Harry Potter and the Sorcers Stone",
                    "authors": ["com.example.demo.model.entity.Author@79f4d14d"],
                    "price": 10.96,
                    "summary": "Harry Potter is an ordinary boy who lives in a cupboard",
                    "coverUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
                })
            );
        })
    )

    await waitFor(async () => {
        userEvent.type(screen.getByTestId("form-title-input"), "gogo")
        userEvent.type(screen.getByTestId("form-summary-textarea"), "summary of a book")
        userEvent.type(screen.getByTestId("form-price-input"), "12")
        userEvent.type(screen.getByTestId("form-cover-url-input"), "https://lala.com")
        userEvent.selectOptions(screen.getByTestId("form-authors-input-group-select"), "George R.R Martin")
        userEvent.click(screen.getByTestId("form-authors-input-group-button"))
        userEvent.type(screen.getByTestId("form-quantity-input"), "15")
        await userEvent.click(screen.getByTestId("add-book-button"))
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/")
    })
})

test('clicking the add-book-button should not redirect on fail response from the server', async () => {
    render(<ToastContextProvider>
        <BrowserRouter>
            <AddBookPage />
        </BrowserRouter>
    </ToastContextProvider>)

    server.use(
        rest.post("http://localhost:8080/books", (req, res, ctx) => {
            return res(
                // Respond with a 200 status code
                ctx.status(500),
                ctx.json({
                    "id": 1,
                    "title": "Harry Potter and the Sorcers Stone",
                    "authors": ["com.example.demo.model.entity.Author@79f4d14d"],
                    "price": 10.96,
                    "summary": "Harry Potter is an ordinary boy who lives in a cupboard",
                    "coverUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
                })
            );
        })
    )

    await waitFor(async () => {
        userEvent.type(screen.getByTestId("form-title-input"), "gogo")
        await userEvent.click(screen.getByTestId("add-book-button"))
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(0)
    })
})

test('clicking the add-book-button should show trigger form validation if the form fields are empty', async () => {
    render(<ToastContextProvider>
        <BrowserRouter>
            <AddBookPage />
        </BrowserRouter>
    </ToastContextProvider>)

    server.use(
        rest.post("http://localhost:8080/books", (req, res, ctx) => {
            return res(
                // Respond with a 200 status code
                ctx.status(200),
            );
        })
    )

    await waitFor(async () => {
        expect(screen.getByTestId("form-title-feedback")).not.toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-summary-feedback")).not.toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-price-feedback")).not.toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-cover-url-feedback")).not.toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-authors-input-group-feedback")).not.toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-quantity-feedback")).not.toHaveAttribute("data-validated")

        await userEvent.click(screen.getByTestId("add-book-button"))

        expect(screen.getByTestId("form-title-feedback")).toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-summary-feedback")).toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-price-feedback")).toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-cover-url-feedback")).toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-authors-input-group-feedback")).toHaveAttribute("data-validated")
        expect(screen.getByTestId("form-quantity-feedback")).toHaveAttribute("data-validated")
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(0)
    })
})
