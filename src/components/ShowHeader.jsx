import { Grid, Input, Link } from "@mui/joy";
export default function ShowHeader({
  getShows,
  search,
  setSearch,
  searchShows,
}) {
  let arr = ["Popular", "Animation", "Kids", "Sci-Fi & Fantasy"];

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={1}>
        <a href="/">Home</a>
      </Grid>
      <Grid xs={1}>
        <a href="#">Show App</a>
      </Grid>
      <Grid xs={7}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              color="success"
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getShows(e.target.name)}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid xs={3}>
        <Input
          color="success"
          size="sm"
          variant="soft"
          placeholder="Search a show..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchShows}>Search Shows</button>
      </Grid>
    </Grid>
  );
}
