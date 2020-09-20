-- Zadatak
-- U Photomath bazi se nalaze dvije tablice, book i task. Svaka knjiga ima odgovarajući
-- identifikacijski broj (id) i naziv (name). U knjizi se nalaze zadaci koji se rješavaju. Jedan
-- zadatak se može nalaziti u samo jednoj knjizi. Svaki zadatak ima odgovarajući
-- identifikacijski broj (id), identifikacijski broj knjige u kojoj se nalazi (book_id) te
-- informaciju o tome da li je task riješen ili nije (solved = 1 ili 0).

-- 1. Upit koji će dati popis identifikacijskih brojeva neriješenih zadataka (task_id) te naziva knjiga (book_name) u kojima se ti zadaci nalaze.

SELECT task.id, book.name as TaskID from task
LEFT JOIN book ON task.book_id = book.id
WHERE solved = 0


-- 2. Upit koji će dati popis identifikacijskih brojeva knjiga (book_id) i ukupnog broja riješenih zadatka u pojedinoj knjizi (solved_tasks). 
-- Rezultat treba biti sortiran silazno po broju taskova.

SELECT book.id as BookId, COUNT(task.id) AS solved_tasks from book
LEFT JOIN task ON book.id = task.book_id
WHERE task.solved = 1
GROUP BY book.id
ORDER BY solved_tasks DESC
