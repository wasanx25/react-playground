import { eqDate } from "fp-ts/Date";
import { date } from "fp-ts";
import { pipe } from "fp-ts/function";
import { map, some } from "fp-ts/Option";
import { fold } from "fp-ts/boolean";

eqDate.equals(new Date(), new Date());
date.now();

pipe(
  some(true),
  map(
    fold(
      () => "false",
      () => "true"
    )
  )
);
