import { render, screen, waitFor } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import BookDetailsPage from "./BookDetailsPage"
import { ToastContextProvider } from "../../contexts/ToastContextProvider"
import AdminBooks from "../AdminPages/AdminBooksPage/AdminBooksPage"
import userEvent from '@testing-library/user-event';
import { useNavigate } from "react-router-dom"

const mockedUsedNavigate = jest.fn()

// 2- Mock the library
jest.mock("react-router-dom", () => ({

    // 3- Import non-mocked library and use other functionalities and hooks
    ...(jest.requireActual("react-router-dom")),

    // 4- Mock the required hook
    useNavigate: () => mockedUsedNavigate
}));

const server = setupServer(
    rest.get('http://localhost:8080/books/1', (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "title": "Harry Potter and the Sorcers Stone",
                "authors": ["com.example.demo.model.entity.Author@79f4d14d"],
                "price": 10.96,
                "summary": "Harry Potter is an ordinary boy who lives in a cupboard",
                "coverUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
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

test("The page should have edit book button visible only to admins", () => {
    expect(false).toBe(true)
})
test("The page should have disable book button visible only to admins", () => {
    expect(false).toBe(true)
})
test("The page should have delete book button visible only to admins", () => {
    expect(false).toBe(true)
})

test("subnavigation renders correctly", (async () => {
    render(<BrowserRouter>
        <BookDetailsPage />
    </BrowserRouter>)

    await waitFor(() => {
        let subNavigationWrapper = screen.getByTestId("subnavigation-wrapper")
        expect(subNavigationWrapper).toHaveClass("row")
        expect(subNavigationWrapper.nodeName.toLowerCase()).toBe("div")

        let subNavigation = screen.getByTestId("subnavigation")
        expect(subNavigation).toHaveClass("home-page-subnavigation home-page-subnavigation-pills row")
        expect(subNavigation.nodeName.toLowerCase()).toBe("div")
        expect(subNavigation.childElementCount).toBe(3)

        let subNavigationEditBookItem = screen.getByTestId("subnavigation-edit-book-item")
        expect(subNavigationEditBookItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationEditBookItem.nodeName.toLowerCase()).toBe("div")

        let subNavigationEditBookLink = screen.getByTestId("subnavigation-edit-book-link")
        expect(subNavigationEditBookLink).toHaveClass("tag-btn-link")
        expect(subNavigationEditBookLink).toHaveAttribute("href", "/edit")
        expect(subNavigationEditBookLink).toHaveAttribute("text", "Edit Book")
        expect(subNavigationEditBookLink).toHaveTextContent("Edit Book")
        expect(subNavigationEditBookLink.nodeName.toLowerCase()).toBe("a")

        let subNavigationDisableBookItem = screen.getByTestId("subnavigation-disable-book-item")
        expect(subNavigationDisableBookItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationDisableBookItem.nodeName.toLowerCase()).toBe("div")

        let subNavigationDisableBookItemButton = screen.getByTestId("subnavigation-disable-book-button")
        expect(subNavigationDisableBookItemButton).toHaveClass("tag-btn")
        expect(subNavigationDisableBookItemButton).toHaveTextContent("Disable Book")
        expect(subNavigationDisableBookItemButton.nodeName.toLowerCase()).toBe("button")

        let subNavigationDeleteBookItem = screen.getByTestId("subnavigation-delete-book-item")
        expect(subNavigationDeleteBookItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationDeleteBookItem.nodeName.toLowerCase()).toBe("div")

        let subNavigationDeleteBookItemButton = screen.getByTestId("subnavigation-delete-book-button")
        expect(subNavigationDeleteBookItemButton).toHaveClass("tag-btn")
        expect(subNavigationDeleteBookItemButton).toHaveTextContent("Delete Book")
        expect(subNavigationDeleteBookItemButton.nodeName.toLowerCase()).toBe("button")
    })
}))

test("Delete Book should redirect to '/admin/book' and display success message on 200 OK from the server", async () => {
    render(<ToastContextProvider>
        <MemoryRouter initialEntries={['/books/1']}>
            <Routes>
                <Route path="/books/:bookId" element={<BookDetailsPage />}></Route>
                <Route path="/admin/books" element={<AdminBooks />}></Route>
            </Routes>
        </MemoryRouter>
    </ToastContextProvider>)

    server.use(
        rest.delete("http://localhost:8080/books/1", (req, res, ctx) => {
            return res(
                // Respond with a 200 status code
                ctx.status(200),
            );
        })
    )

    await waitFor(async () => {
        await userEvent.click(screen.getByTestId("subnavigation-delete-book-button"))
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/admin/books")
    })
})

test("Delete Book should not redirect and display error message on status different than 200 OK from the server", async () => {
    render(<ToastContextProvider>
        <MemoryRouter initialEntries={['/books/1']}>
            <Routes>
                <Route path="/books/:bookId" element={<BookDetailsPage />}></Route>
                <Route path="/admin/books" element={<AdminBooks />}></Route>
            </Routes>
        </MemoryRouter>
    </ToastContextProvider>)

    server.use(
        rest.delete("http://localhost:8080/books/1", (req, res, ctx) => {
            return res(
                // Respond with a 200 status code
                ctx.status(500),
            );
        })
    )

    await waitFor(async () => {
        await userEvent.click(screen.getByTestId("subnavigation-delete-book-button"))
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(0)
    })
})