import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import "./style.css"

export default function Faq() {
  return (
    <>
      <Menu/>
      <main class="profile column main-faq">
        <div>
            <h2 class="page-subtitle">FAQ</h2>
        </div>
        <div>
            <details>
                <summary>
                    Como posso ajudar as ONGs?
                </summary>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus voluptas inventore illo, laborum velit veniam in. Voluptatibus enim, eveniet voluptatem consectetur alias similique, est neque accusamus libero numquam illum.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    Como fazer doações?
                </summary>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus voluptas inventore illo, laborum velit veniam in. Voluptatibus enim, eveniet voluptatem consectetur alias similique, est neque accusamus libero numquam illum.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    Como me voluntariar para o trabalho voluntário?
                </summary>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus voluptas inventore illo, laborum velit veniam in. Voluptatibus enim, eveniet voluptatem consectetur alias similique, est neque accusamus libero numquam illum.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    Como Avaliar as ONGs?
                </summary>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus voluptas inventore illo, laborum velit veniam in. Voluptatibus enim, eveniet voluptatem consectetur alias similique, est neque accusamus libero numquam illum.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    Como denunciar ONGs?
                </summary>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus voluptas inventore illo, laborum velit veniam in. Voluptatibus enim, eveniet voluptatem consectetur alias similique, est neque accusamus libero numquam illum.
                </p>
            </details>
        </div>
      </main>
      <Footer/>
      <Vlibras/>
    </>
  )
}
