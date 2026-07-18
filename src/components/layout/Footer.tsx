import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-ink text-paper">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl">
            Литера<span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-paper/70">
            Типография полного цикла: визитные карточки, книги, брошюры и
            другая полиграфия. Печатаем то, что держат в руках.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            Услуги
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/70">
            <li>
              <Link href="/shop/vizitki" className="hover:text-paper">
                Визитные карточки
              </Link>
            </li>
            <li>
              <Link href="/shop/knigi" className="hover:text-paper">
                Книги
              </Link>
            </li>
            <li>
              <Link href="/shop/broshyury" className="hover:text-paper">
                Брошюры
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-paper">
                Весь каталог
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            Контакты
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/70">
            <li>
              <a href="tel:+70000000000" className="hover:text-paper">
                +7 (000) 000-00-00
              </a>
            </li>
            <li>
              <a href="mailto:hello@litera-print.ru" className="hover:text-paper">
                hello@litera-print.ru
              </a>
            </li>
            <li>Москва, ул. Печатников, 1</li>
            <li>
              <Link href="/privacy" className="hover:text-paper">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Литера. Все права защищены.</p>
          <p>Контент и цены — демонстрационные, требуют наполнения.</p>
        </Container>
      </div>
    </footer>
  );
}
