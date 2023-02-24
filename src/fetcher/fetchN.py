import urllib.request
from bs4 import BeautifulSoup
import argparse
import fetch


def fetch_spell_urls(N):
    if N is None or N < 0 or N > 519:
        N = 519

    # dnd.su позволяет грузить страницу заклинания по номеру (от 1 до 519)
    urls = list(map(lambda i: f'https://dnd.su/spells/{i}', range(1, N + 1)))

    return urls

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", dest="file", type=str,
                        help="Destination file path", required=True)
    parser.add_argument("-n", "--number", dest="N", nargs="?", type=int, const=10,
                        help="Number of spells to fetch")

    args = parser.parse_args()
    urls = fetch_spell_urls(args.N)
    fetch.create_spellbook(args.file, urls)
