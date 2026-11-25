# The Funniest Office Joke, Judged Head-to-Head

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/toirant/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/toirant/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One short line about office life is the whole entry. This program writes a single one-line office joke to `/output/entry.txt`.

## The joke

> Our office printer only jams on deadline day, so HR gave it Employee of the Month — it is the only one here that ever stops working.

The setup is the printer that only jams on deadline day; the turn is HR rewarding it with Employee of the Month; the punchline lands last on the double meaning of "stops working" — it breaks down, and it is the only one in the office that ever stops labouring.

## Run

```sh
node main.ts
```

It validates the joke first (UTF-8, 1–200 characters, a single line, not whitespace-only), writes it to `/output/entry.txt`, then re-reads the file and validates it again so a bad write can never pass silently.

## License

MIT — see [LICENSE](LICENSE).
