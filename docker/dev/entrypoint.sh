#!/bin/bash
if [ -n "$CMD" ]; then
    eval $CMD
else
    npm run dev
fi