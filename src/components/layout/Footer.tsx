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
              <Link href="/shop/kalendari" className="hover:text-paper">
                Календари
              </Link>
            </li>
            <li>
              <Link href="/shop/upakovka" className="hover:text-paper">
                Упаковка
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
              <a href="tel:+79067980195" className="hover:text-paper">
                +7 (906) 798-01-95
              </a>
            </li>
            <li>
              <a
                href="https://t.me/galaprint_site"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                Telegram
              </a>
            </li>
            <li>
              <a href="mailto:order.galaprint@gmail.com" className="hover:text-paper">
                order.galaprint@gmail.com
              </a>
            </li>
            <li>Москва, Малая Семёновская ул., 9с3</li>
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
          <p>Цены ориентировочные — точную стоимость пришлём после заявки.</p>
        </Container>
      </div>
    </footer>
  );
}
