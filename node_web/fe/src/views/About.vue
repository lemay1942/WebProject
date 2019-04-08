<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <v-textarea
          name="input-7-1"
          label="Default style"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          hint="Hint text"
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-textarea
          box
          name="input-7-4"
          label="Box textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-textarea
          outline
          name="input-7-4"
          label="Outline textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>
