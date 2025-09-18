import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../App.css'
import Navbar from '../navbar';
import { Button } from '../ui/button';
import Footer from '../footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const Blog = () => {

// get the "/:id"
const {id} = useParams()
const [content, setContent] = useState({})
const getData = async ()=>{
    //fetch the data (what's the difference with axios?)
    const response = await fetch(`http://localhost:3000/blog/${id}`)
    const jsondata = await response.json()
    console.log(jsondata)
    setContent(jsondata)
}


useEffect(()=>{
    getData()
}, [])    
// const markdownTestContent = `# Markdown Formatting Test Document

// This document contains all major markdown formatting features to test your \`react-markdown\` implementation.

// ## Headers

// # H1 Header
// ## H2 Header  
// ### H3 Header
// #### H4 Header
// ##### H5 Header
// ###### H6 Header

// ## Text Formatting

// **Bold text** and __also bold__

// *Italic text* and _also italic_

// ***Bold and italic*** and ___also bold and italic___

// ~~Strikethrough text~~

// \`Inline code\` with backticks

// ## Links and Images

// [Link to Google](https://google.com)

// [Link with title](https://github.com "GitHub Homepage")

// Auto-converted link: https://www.example.com

// ![Alt text for image](https://via.placeholder.com/300x200/0066cc/ffffff?text=Sample+Image)

// ![Image with title](https://via.placeholder.com/200x150/ff6600/ffffff?text=Test "Image Title")

// ## Lists

// ### Unordered Lists

// - Item 1
// - Item 2
//   - Nested item 2.1
//   - Nested item 2.2
//     - Deep nested item 2.2.1
// - Item 3

// * Alternative bullet style
// * Another item
//   * Nested with asterisk

// ### Ordered Lists

// 1. First item
// 2. Second item
//    1. Nested numbered item
//    2. Another nested item
//       1. Deep nested item
// 3. Third item

// ### Mixed Lists

// 1. Ordered item
//    - Unordered nested item
//    - Another unordered nested
// 2. Back to ordered
//    1. Nested ordered
//       - Mixed nesting

// ## Code Blocks

// ### Inline Code
// Use \`console.log()\` to output to the console.

// ### Code Blocks without Language

// \`\`\`
// function hello() {
//     console.log("Hello World!");
// }
// \`\`\`

// ### JavaScript Code Block

// \`\`\`javascript
// // JavaScript example
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const result = fibonacci(10);
// console.log(\`Fibonacci(10) = \${result}\`);
// \`\`\`

// ### Python Code Block

// \`\`\`python
// # Python example
// def quicksort(arr):
//     if len(arr) <= 1:
//         return arr
    
//     pivot = arr[len(arr) // 2]
//     left = [x for x in arr if x < pivot]
//     middle = [x for x in arr if x == pivot]
//     right = [x for x in arr if x > pivot]
    
//     return quicksort(left) + middle + quicksort(right)

// numbers = [3, 6, 8, 10, 1, 2, 1]
// print(quicksort(numbers))
// \`\`\`

// ### CSS Code Block

// \`\`\`css
// /* CSS example */
// .markdown-content {
//   max-width: 800px;
//   margin: 0 auto;
//   font-family: 'Inter', sans-serif;
// }

// .code-block {
//   background-color: #f8f9fa;
//   border-radius: 6px;
//   padding: 16px;
//   overflow-x: auto;
// }
// \`\`\`

// ### HTML Code Block

// \`\`\`html
// <!-- HTML example -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Test Page</title>
// </head>
// <body>
//     <h1>Hello World</h1>
//     <p>This is a test paragraph.</p>
// </body>
// </html>
// \`\`\`

// ## Tables

// | Feature | Supported | Notes |
// |---------|-----------|-------|
// | Headers | ✅ Yes | H1-H6 supported |
// | **Bold** | ✅ Yes | **Bold** and __bold__ |
// | *Italic* | ✅ Yes | *Italic* and _italic_ |
// | \`Code\` | ✅ Yes | Inline and blocks |
// | Links | ✅ Yes | All link types |
// | Images | ✅ Yes | With alt text |
// | Tables | ⚠️ Maybe | Requires remark-gfm |

// ### Table with Alignment

// | Left Aligned | Center Aligned | Right Aligned |
// |:-------------|:--------------:| -------------:|
// | Column 1     | Column 2       | Column 3      |
// | Data 1       | Data 2         | Data 3        |
// | Longer data  | More data      | Final data    |

// ## Blockquotes

// > This is a simple blockquote.

// > This is a blockquote
// > that spans multiple lines
// > and continues here.

// > **Blockquote with formatting**
// > 
// > You can use *italic*, **bold**, and even \`code\` inside blockquotes.
// > 
// > > Nested blockquotes are also possible
// > > Like this one

// ## Horizontal Rules

// ---

// ***

// ___

// ## Task Lists (GitHub Flavored Markdown)

// - [x] Completed task
// - [x] Another completed task
// - [ ] Incomplete task
// - [ ] Another incomplete task
//   - [x] Nested completed task
//   - [ ] Nested incomplete task

// ## Line Breaks and Paragraphs

// This is the first paragraph. It has multiple sentences. Each sentence adds more content to test paragraph rendering.

// This is the second paragraph after a blank line.

// This line has two spaces at the end  
// So this line should be on a new line (line break).

// ## Escape Characters

// You can escape special characters:

// \\*This won't be italic\\*

// \\# This won't be a header

// \\\`This won't be code\\\`

// ## Math (LaTeX) - Requires remark-math + rehype-katex

// Inline math: $E = mc^2$

// Block math:

// $$
// \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
// $$

// $$
// \\begin{aligned}
// a &= b + c \\\\
// d &= e + f
// \\end{aligned}
// $$

// ## HTML Elements (Requires rehype-raw)

// <div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">
// This is raw HTML content inside the markdown.
// </div>

// <details>
// <summary>Click to expand</summary>

// This content is hidden by default and can be expanded.

// - Hidden list item 1
// - Hidden list item 2

// </details>

// ## Footnotes (Extended Markdown)

// Here's a sentence with a footnote[^1].

// Another sentence with a different footnote[^note].

// [^1]: This is the first footnote.
// [^note]: This is the second footnote with a custom identifier.

// ## Definition Lists (Extended Markdown)

// Term 1
// : Definition for term 1

// Term 2
// : Definition for term 2
// : Another definition for term 2

// ## Emojis (If supported)

// :smile: :heart: :thumbsup: :rocket: :computer:

// ## Special Characters and Unicode

// © Copyright symbol
// ™ Trademark symbol
// ® Registered trademark
// … Ellipsis
// — Em dash
// – En dash
// ' Curly apostrophe
// " Curly quotes "

// ## Complex Nested Content

// 1. **First item** with *emphasis*
   
//    This is a paragraph under the first item with \`inline code\`.
   
//    \`\`\`javascript
//    // Code block under list item
//    console.log("Hello from nested code!");
//    \`\`\`
   
//    > Blockquote under the first item
//    > with multiple lines
   
//    - Nested unordered list
//    - With multiple items
//      - And deeper nesting
   
// 2. **Second item**
   
//    | Column 1 | Column 2 |
//    |----------|----------|
//    | Data 1   | Data 2   |
   
//    Another paragraph after the table.

// ## Long Content Test

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

// **Bold paragraph:** Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

// *Italic paragraph:* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

// ---

// ## End of Test Document

// If all the above content renders correctly, your markdown implementation is working well! Pay special attention to:

// - ✅ Basic formatting (bold, italic, code)
// - ✅ Headers and lists
// - ⚠️ Tables (need remark-gfm)
// - ⚠️ Syntax highlighting (need react-syntax-highlighter)
// - ⚠️ Math (need remark-math + rehype-katex)
// - ⚠️ HTML (need rehype-raw)
// - ⚠️ Task lists (need remark-gfm)`;

  return (
    <>
    <Navbar/>
    <div className='grid auto-rows-auto grid-cols-4 grid-rows-1 my-10'>
    <Button asChild className="col-start-1 row-start-1 cursor-pointer w-[80px] mx-[80px]" variant={"outline"}>
      <a href="http://localhost:5173/blog">
      Back
      </a>
      </Button>
    <article className='flex flex-col row-start-1 col-start-2 col-span-2'>
    {/* <h1 className='text-[36px]/9 font-bold'>{content.title}</h1> */}
    <span className='text-gray-500'>{content.author + " | " + new Date(content.date_published).toLocaleDateString('en-GB',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}</span>
    <div className='markdown-content'>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]}>
      {content.content}
      </ReactMarkdown>
    </div>
    <img className='w-[1000px]' src="/meetup-1.jpg" alt="" />

      </article>
    </div>
<Footer/>
    </>
  )
}

export default Blog